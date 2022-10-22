import { isString } from '@vueuse/core'
import { computed, createSharedComposable, ref, useApi, useGlobal } from '#imports'
import type { ProjectRole, Role, Roles } from '~/lib'

/**
 * Provides the roles a user currently has
 *
 * * `userRoles` - the roles a user has outside of projects
 * * `projectRoles` - the roles a user has in the current project (if one was loaded)
 * * `allRoles` - all roles a user has (userRoles + projectRoles)
 * * `hasRole` - a function to check if a user has a specific role
 * * `loadProjectRoles` - a function to load the project roles for a specific project (by id)
 */
export const useRoles = createSharedComposable(() => {
  const { user, previewAs } = useGlobal()

  const { api } = useApi()

  const projectRoles = ref<Roles<ProjectRole>>({})

  const userRoles = computed<Roles<Role>>(() => {
    let roles = user.value?.roles ?? {}

    // if string populate key-value paired object
    if (isString(roles)) {
      roles = roles.split(',').reduce<Roles>((acc, role) => {
        acc[role] = true
        return acc
      }, {})
    }

    return roles
  })

  const allRoles = computed<Roles>(() => ({
    ...userRoles.value,
    ...projectRoles.value,
  }))

  async function loadProjectRoles(projectId: string, isSharedBase?: boolean, sharedBaseId?: string) {
    projectRoles.value = {}

    if (isSharedBase) {
      const user = await api.auth.me(
        {},
        {
          headers: {
            'xc-shared-base-id': sharedBaseId,
          },
        },
      )

      projectRoles.value = user.roles
    } else if (projectId) {
      const user = await api.auth.me({ project_id: projectId })
      projectRoles.value = user.roles
    }
  }

  function hasRole(role: Role | ProjectRole | string, includePreviewRoles = false) {
    if (includePreviewRoles) {
      return previewAs.value === role
    }

    return allRoles.value[role]
  }

  return { allRoles, userRoles, projectRoles, loadProjectRoles, hasRole }
})
