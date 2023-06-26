import { defineStore } from 'pinia'
import {SONG_OPTIONS, DEF_SONG} from '@/constants'
import {ref, computed} from 'vue'

export const useRhythmStore = defineStore('rhythm', () => {
  const SongId = ref(DEF_SONG)
  const name = computed(() => {
    return SONG_OPTIONS.find(item => item.id === SongId.value) || {}
  })

  function setSong(val) {
    SongId.value = val
  }

  return { SongId, name, setSong }
})