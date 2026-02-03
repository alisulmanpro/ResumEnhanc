'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import menuData from '@/data/resume'

type SidebarState = {
  items: MenuData[]
  activeId: number | string | null

  setActiveId: (id: number | string) => void
  setAddSection: (id: number | string, addsec: boolean) => void
}

const useResumeStore = create<SidebarState>()(
  persist(
    (set) => ({
      items: menuData,
      activeId: 1,
      setActiveId: (id) => set({ activeId: id }),
      setAddSection: (id, addsec) => set((state: SidebarState) => ({
        activeId: id,
        items: state.items.map(item => item.id === id ? { ...item, addsec: addsec } : item)
      }))
    }),
    {
      name: 'ResumEnhanc-resume-store',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        activeId: state.activeId,
      }),
    }
  )
)


export default useResumeStore;