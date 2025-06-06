
const MenuTem = ({item}) => {

    const {name,image, price, recipe} = item;

    return (
        <div className="flex space-x-4 ">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                
                <h3 className="uppercase text-[#151515] font-semibold">{name}------------</h3>
                <p className="text-sm text-[#737373]">{recipe}</p>
                
                
                </div>

                <p className="text-[#BB8506]">${price}</p>
            
        </div>
    );
};

export default MenuTem;