
const express=require("express") 
const router=express.Router() 
const db=require("../db/db")


router.get("/api/v1/candidates", (req, res)=>{
     const sql="Select  * from crud";
     db.query(sql, (err, result)=>{
        if (err) return res.json(err); 
        return res.json(result);
    })
})

router.post("/api/v1/candidates", (req, res)=>{
    const sql="insert into crud (`PRODUCT_ID`,`PRODUCT_NAME`,`CATEGORY_ID`,`CATEGORY_NAME`) values (?,?,?,?)"; 
    db.query(sql,[req.body.PRODUCT_ID, req.body.PRODUCT_NAME,req.body.CATEGORY_ID,req.body.CATEGORY_NAME], (err, result)=>{ 
    if (err) return res.json(err);
    return res.json(result);
    })
})


router.put("/api/v1/candidates/:id", (req, res)=>{
const sql="update crud set `PRODUCT_ID`-?,`PRODUCT_NAME`-?,`CATEGORY_ID'-?,`CATEGORY_NAME'-?  where id-?";
    const id=Number (req.params.id);
    db.query(sql,[req.body.PRODUCT_ID, req.body.PRODUCT_NAME,req.body.CATEGORY_ID,req.body.CATEGORY_NAME], (err,result)=>{ 
        if(err) return res.json(err);
        return res.json(result);
    })
})


router.delete("/api/v1/candidates/:id", (req, res)=>{
const sql="delete from crud where id=?";
 const id=Number(req.params.id); db.query(sql,[id], (err, result)=>{
  if (err) return res.json(err);
   return res.json(result);
    })
})

module.exports= router;