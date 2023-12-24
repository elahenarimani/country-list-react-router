function Input ({valueState , onChangeHandler}){
    return(
        <div className=" w-full">
            <input className="w-[350px] md:w-[450px] h-[50px] bg-[#F3F3F5] rounded-[15px] outline-none  pl-[20px] color-gray border-[2px] border-gray-650" placeholder="Search..." value={valueState} onChange={onChangeHandler}/>
        </div>
    )
}
export default Input;