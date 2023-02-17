#!/usr/bin/env bash
#
# Given a name, return a string with the message.

main() {
  local name="$1"

  if [[ -z "${name}" ]]; then
    echo "One for you, one for me."
    exit 0
  fi

  echo "One for ${name}, one for me."
}

main "$@"