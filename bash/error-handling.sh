#!/usr/bin/env bash
#
# Implement various kinds of error handling and resource management.

error_message() {
  echo "$*" >&2
}


main() {
  local -i num_of_args="$#"
  local name="$1"

  if (( num_of_args != 1 )); then
    error_message "Usage: error_handling.sh <person>"
    exit 1
  fi

  echo "Hello, ${name}"
}

main "$@"