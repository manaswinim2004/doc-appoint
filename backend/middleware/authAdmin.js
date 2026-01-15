import jwt from "jsonwebtoken"

// admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers

    if (!atoken) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again"
      })
    }

    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)

    const isDemoMode = process.env.DEMO_MODE === "true"

    const realAdminKey =
      process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD

    const demoAdminKey =
      process.env.DEMO_ADMIN_EMAIL + process.env.DEMO_ADMIN_PASSWORD

    // allow either real admin OR demo admin
    if (
      token_decode !== realAdminKey &&
      (!isDemoMode || token_decode !== demoAdminKey)
    ) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again"
      })
    }

    // mark demo admin
    req.isDemoAdmin =
      isDemoMode && token_decode === demoAdminKey

    next()

  } catch (error) {
    console.log(error)
    res.json({
      success: false,
      message: error.message
    })
  }
}

export default authAdmin
