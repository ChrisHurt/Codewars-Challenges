def song_decoder(song)
  new_song = song.split('WUB').select { |c| c!="" }
  return new_song.join(' ')
end