(ns bird-watcher)

(def last-week [0 2 5 3 7 8 4])

(defn today [birds]
  (last birds)
  )

(defn inc-bird [birds]
  (conj (pop birds) (inc (last birds)))
  )

(defn day-without-birds? [birds]
  (true? (some zero? birds))
  )

(defn n-days-count [birds n]
  (reduce + (take n birds))
  )

(defn busy-days [birds]
  (count (filter #(>= % 5) birds))
  )

(defn odd-week? [birds]
  (every? (fn [x] (or (= x 0) (= x 1))) birds)
  )
