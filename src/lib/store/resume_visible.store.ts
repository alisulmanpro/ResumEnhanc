'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ResumeAddMoreSectionBuilder, ResumeData, ResumeSectionBuilder, ResumeSectionFields } from '../data/resume.selector';

export const useSectionsStore = create<ResumeVisibleStoreProps>()(
    persist(
        (set, get) => ({
            sections: ResumeSectionBuilder(),
            addMoreSections: ResumeAddMoreSectionBuilder(),
            sectionData: ResumeData(),
            resumeSectionFields: ResumeSectionFields(),
            completedSectionIds: [],
            activeId: ResumeData()[0].id,
            preActiveId: null,
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
            })),

            setPreActiveId: (id) => set(() => ({
                preActiveId: id
            })),

            setAddSection: (id: string) => {
                const { addMoreSections, sections } = get();
                const sectionToAdd = addMoreSections.find((s) => s.id === id);
                if (!sectionToAdd) return;
                set({
                    sections: [...sections, sectionToAdd],
                    addMoreSections: addMoreSections.filter((s) => s.id !== id)
                });
            },
        }),
        {
            name: 'resume-sections',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => (
                {
                    sections: state.sections,
                    addMoreSections: state.addMoreSections,
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
