def anagrams(word, words)
    output = words.select do |w|
      matches = 0
      chars_considered = []
      word.length.times do |index|
        regex = /#{word[index]}/
        if w.scan(regex).size == word.scan(regex).size && !chars_considered.include?(word[index])
          matches += w.scan(regex).size
          chars_considered << word[index]
        end
      end
      if matches == word.length
        true
      else
        false
      end
    end
  end