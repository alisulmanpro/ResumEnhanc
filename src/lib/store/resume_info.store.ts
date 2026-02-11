import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useResumeStore = create<ResumeInfoProps>()(
    persist(
        (set) => ({
            resumeInfo: [],
            activeResumeId: null,
            resume_title: "untitled",

            setResumeName: (title: string) => set(() => ({
                resume_title: title,
            })),

            createResume: (title?: string) => set((state) => {
                const id = uuidv4()
                const newResume: ResumeInfo = {
                    id,
                    resume_title: title || "Untitled",
                    resume_data: {},
                }

                return {
                    resumeInfo: [...state.resumeInfo, newResume],
                    activeResumeId: id
                }
            }),

            setActiveResume: (id: string) => set({ activeResumeId: id }),

            updateResumeTitle: (id: string, title: string) =>
                set((state) => ({
                    resumeInfo: state.resumeInfo.map((resume) =>
                        resume.id === id
                            ? { ...resume, resume_title: title }
                            : resume
                    )
                })),

            upsertSection: (resumeId, sectionKey, data) => set((state) => ({
                resumeInfo: state.resumeInfo.map((resume) => {
                    if (resume.id !== resumeId) return resume

                    return {
                        ...resume,
                        resume_data: {
                            ...resume.resume_data,
                            [sectionKey]: data
                        }
                    }
                })
            })),
        }),
        {
            name: 'resume-info',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                resumeInfo: state.resumeInfo,
                resume_title: state.resume_title,
                activeResumeId: state.activeResumeId
            }),
        }
    )
)

export default useResumeStore
