// CREATE INCOME FOR A SPECIFIC USER
incomeRouter.post('/income', auth, async (req, res) => {

 try {

  Income.create({
        description: req.body.description,
        amount: req.body.amount
  }, function(err, income) {
        User.findById(req.user.id , function(err, foundUser){
              if(err){
                    console.log(err)
              }else {
                    foundUser.income.push(income)
                    foundUser.save(function(err, data){
                          if(err) {
                                console.log(err)
                          }else {

                           res.json({
                                 data: data
                             })
                                console.log(data)
                          }
                    })
              }
        })
  })

 } catch (error) {
    console.log(error.message)
   
 }

})
