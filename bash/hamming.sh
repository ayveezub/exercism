#!/usr/bin/env bash
#
# Calculate the Hamming Distance between two DNA strands.

error_message() {
  echo "$*" >&2
}

hamming_distance() {
  local first_strand="$1"
  local second_strand="$2"

  local -i acc=0
  local -i currentInd
  for currentInd in $(eval echo "{0..${#first_strand}}"); do
    if [[ "${first_strand:${currentInd}:1}" != "${second_strand:${currentInd}:1}" ]]; then
      (( acc++ ))
    fi
  done

  echo "$acc"
}


main() {
  local first_strand="$1"
  local second_strand="$2"

  if (( $# != 2 )); then
    error_message "Usage: hamming.sh <string1> <string2>"
    exit 1
  fi

  if (( ${#first_strand} != ${#second_strand} )); then
    error_message "strands must be of equal length"
    exit 1
  fi

  if [[ "${first_strand}" == "" && "${second_strand}" == "" ]]; then
    echo "0"
    exit 0
  fi

  hamming_distance "$first_strand" "$second_strand"
}

main "$@"