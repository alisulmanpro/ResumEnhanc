'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ResumeData, ResumeSectionBuilder, ResumeSectionFields } from '../data/resume.selector';
import cookieStorage from '../cookie_storage';

export const useSectionsStore = create<ResumeVisibleStoreProps>()(
    persist(
        (set) => ({
            sections: ResumeSectionBuilder(),
            sectionData: ResumeData(),
            resumeSectionFields: ResumeSectionFields(),
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
        }),
        {
            name: 'resume-sections',
            storage: createJSONStorage(() => cookieStorage),
            partialize: (state) => (
                {
                    sections: state.sections,
                    sectionData: state.sectionData,
                    resumeSectionFields: state.resumeSectionFields,
                    activeId: state.activeId,
                    hydrated: state.hydrated,
                }
            ),
            onRehydrateStorage: () => () => {
                useSectionsStore.setState({ hydrated: true })
            },
        }
    )
)
