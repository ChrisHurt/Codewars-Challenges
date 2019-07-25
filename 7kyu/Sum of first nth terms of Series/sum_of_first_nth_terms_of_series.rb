def series_sum(n)
    if n == 1 
      return "1.00"
    end
    sum = 0.00
    (n).times do |index|
      sum += 1.0 / ((index) * 3 + 1)
    end
    sum_string = sum.round(2).to_s
    if  sum_string[-2] == '.'
      sum_string += '0'
    end
    sum_string
  end