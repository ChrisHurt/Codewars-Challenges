def openOrSenior(data)
    mem_cat = []
    data.each do |person|
      if person[0] >= 55 && person[1] > 7
        mem_cat << 'Senior'
      else
        mem_cat << 'Open'
      end
    end
    return mem_cat
  end