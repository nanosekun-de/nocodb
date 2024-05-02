#!/usr/bin/env bats

NOCO_HOME="${HOME}/.nocodb"
export NOCO_HOME



setup() {
  cd "${WORKING_DIR}/configure" || exit 1
  ./setup.sh
}

teardown() {
  cd "${WORKING_DIR}/configure" || exit 1
  ./setup.sh
}

@test "Check Redis, WatchTower and NocoDB are down" {
    ../expects/configure/stop.sh

    cd "${NOCO_HOME}" || exit 1

    # Verify container is not running
    docker compose ps | grep -q 'redis' && fail "Redis is running"
    docker compose ps | grep -q 'watchtower' && fail "WatchTower is running"
    docker compose ps | grep -q 'nocodb' && fail "NocoDB is running"
}
