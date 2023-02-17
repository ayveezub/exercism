#!/usr/bin/env bash
#
# Convert a phrase to its acronym.

main() {
  local phrase="$1"

  phrase=${phrase//[^a-zA-Z\']/ }
  phrase="${phrase^^}"

  local acronym=""
  local word
  for word in $phrase; do
    acronym+="${word:0:1}"
  done

  echo "$acronym"
}

main "$@"