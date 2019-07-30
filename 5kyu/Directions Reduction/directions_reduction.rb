def dirReduc(arr)
    evaluating = true
    while evaluating
      evaluating = false
      arr.length.times do |index|
        if arr.length != index + 1
          case arr[index]
          when 'NORTH'
            if arr[index+1] == 'SOUTH'
              arr.delete_at(index+1)
              arr.delete_at(index)
              evaluating = true
            end
          when 'SOUTH'
            if arr[index+1] == 'NORTH'
              arr.delete_at(index+1)
              arr.delete_at(index)
              evaluating = true
            end
          when 'WEST'
            if arr[index+1] == 'EAST'
              arr.delete_at(index+1)
              arr.delete_at(index)
              evaluating = true
            end
          when 'EAST'
            if arr[index+1] == 'WEST'
              arr.delete_at(index+1)
              arr.delete_at(index)
              evaluating = true
            end
          end
        end
      end
    end
    arr
  end