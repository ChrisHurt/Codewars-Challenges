def likes(names)
    likeString = ''
    names.each { |name| likeString += name + ", "}
    likeString.delete_suffix!(', ')
    if names.length == 1
      likeString  = names[0] + ' likes this'
    elsif names.length == 0
      likeString = 'no one likes this'
    elsif names.length < 4
      likeString.delete_suffix!(', ' + names.last)
      likeString  += ' and ' + names.last + ' like this'
    else
      likeString = names[0].to_s + ", " + names[1].to_s + " and " + (names.length - 2).to_s + " others like this"
    end
    
    return likeString
end