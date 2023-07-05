const { User } = require("../../bd");
const { Sector } = require("../../bd");
const { Pc } = require("../../bd");

const updateUser = async (
  id,
  username,
  firstname,
  lastname,
  sectorname,
  pc
) => {
  
  try {
    let user = await User.findByPk(id, 
      {
      include: [
        {
          model: Sector,
          attributes: ["sectorname"],
        },
        {
          model: Pc,
          attributes: ["name"],
          // through:{
          //   attributes: []
          // }
        },
      ],
    }
    );


    if(sectorname){
      const updateSector = await Sector.findOne({
      where: { sectorname: sectorname },
    });
      await user.setSector();
      await user.setSector(updateSector.id);
    }
    
    if(pc){
      const updatePc = await Pc.findOne({
        where: { name: pc },
      })
      await user.setPc(updatePc.id);
    }
  
    

    await User.update(
      {
        username: username,
        firstname: firstname,
        lastname: lastname,
      },
      { where: { id: id } }
    );

    return user
  } catch (e) {
    console.log( "error en controller updateUser", e.message );
  }
};

module.exports = updateUser;
