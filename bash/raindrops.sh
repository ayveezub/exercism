#!/usr/bin/env bash
#
# Convert a number into a string that contains raindrop sounds
# corresponding to certain potential factors.

main() {
  local -i num="$1"
  local raindrop_sounds=""

  if (( num % 3 == 0 )); then
    raindrop_sounds+="Pling"
  fi

  if (( num % 5 == 0 )); then
    raindrop_sounds+="Plang"
  fi

  if (( num % 7 == 0 )); then
    raindrop_sounds+="Plong"
  fi


  if [[ -z "${raindrop_sounds}" ]]; then
    echo "${num}"
    exit 0
  fi

  echo "${raindrop_sounds}"
}

main "$@"