'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ResumeData, ResumeSectionBuilder, ResumeSectionFields } from '../data/resume.selector';

export const useSectionsStore = create<ResumeVisibleStoreProps>()(
    persist(
        (set) => ({
            sections: ResumeSectionBuilder(),
            sectionData: ResumeData(),
            resumeSectionFields: ResumeSectionFields(),
            completedSectionIds: [],
            activeId: ResumeData()[0].id,
            hydrated: false,

            setActiveId: (id: string) =>
                set(() => ({
                    activeId: id,
                })),

            setHydrated: (hydrated: boolean) =>
                set(() => ({
                    hydrated,
                })),
                
            setCompletedId: (id: string) => set((state) => ({
                completedSectionIds: [
                    ...state.completedSectionIds,
                    id
                ]
            }))
        }),
        {
            name: 'resume-sections',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => (
                {
                    sections: state.sections,
                    sectionData: state.sectionData,
                    resumeSectionFields: state.resumeSectionFields,
                    activeId: state.activeId,
                    completedSectionIds: state.completedSectionIds,
                }
            ),
            onRehydrateStorage: () => (state) => {
                state?.setHydrated(true)
            },
        }
    )
)
