import{Request,Response,Router} from "express";

const router = Router();

router.get("/",function(req:Request,res:Response){

  res.json({
    users:[
      {
        firstName:"Jon",
        lastName : "Snow"
      }
    ]
  });

});


router.get("/:id",function(req:Request,res:Response){

  res.json({
    user:{
        firstName:"Jon",
        lastName : "Snow"
      }
  });

});

export default router;
