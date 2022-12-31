function useCurrentDate(){
    const date = new Date();

    return date.getFullYear();
}

export { useCurrentDate };