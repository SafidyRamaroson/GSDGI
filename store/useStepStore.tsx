import { create } from "zustand";

interface StepState {
    currentStep:number
}


interface StepActions {
    handleNextStep:() => void;
    handlePreviousStep: () => void;
    checkStepTo: (num:number) => void;
}


export const useStepStore = create<StepState & StepActions> ((set,get) => ({
    currentStep:1,
    handleNextStep:() => 
    set((state) => ({
        currentStep:state.currentStep + 1
    })),
    handlePreviousStep:() => 
    set((state) => ({
        currentStep:state.currentStep - 1
    })),
    checkStepTo: (num) => 
    set((state) => ({
        currentStep:num
    })),
}))