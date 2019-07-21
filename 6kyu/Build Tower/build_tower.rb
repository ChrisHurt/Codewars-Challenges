def towerBuilder(n_floors)
    tower = []
    n_floors.times do |index|
      floor = ''
      (2*(index)+1).times do 
        floor += '*'
      end
      tower << floor.center(2*(n_floors-1)+1)
    end
    return tower
  end