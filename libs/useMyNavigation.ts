const useMyNavigation = (e: string)=>{
    const selectElement = document.getElementById(`${e}`);
    
    selectElement?.scrollIntoView({ behavior: "smooth" });
}

export default useMyNavigation;