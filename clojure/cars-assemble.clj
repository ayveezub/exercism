(ns cars-assemble)

(defn production-rate
  "Returns the assembly line's production rate per hour,
   taking into account its success rate"
  [speed]
  (let [base-rate 221.0
        success-rates {0 0, 1 1, 2 1, 3 1, 4 1, 5 0.9, 6 0.9, 7 0.9, 8 0.9, 9 0.8, 10 0.77}]
    (* base-rate speed (success-rates speed)))
  )

(defn working-items
  "Calculates how many working cars are produced per minute"
  [speed]
  (-> speed
      production-rate
      (/ 60)
      Math/floor
      Math/round)
  )
