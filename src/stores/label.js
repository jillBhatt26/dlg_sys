import { create } from 'zustand';

const useLabelStore = create(set => ({
    label: null,
    setLabel: label => {
        set(state => ({
            ...state,
            label
        }));
    }
}));

export default useLabelStore;
