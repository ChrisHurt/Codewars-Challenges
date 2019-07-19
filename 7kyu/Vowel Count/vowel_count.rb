def getCount(inputStr)
    vowel = 0
      inputStr.each_byte do |byte|
        if byte.chr == 'a' || byte.chr == 'e' || byte.chr == 'i' || byte.chr == 'o' || byte.chr == 'u'
          vowel += 1
        end     
      end
      return vowel
    end