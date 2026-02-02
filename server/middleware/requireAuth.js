export const requireAuth = (req, res, next) => {
    // Check for Authorization header
    if (!req.headers.authorization) {
      // If missing, block access
      return res.status(401).json({ message: "Not authorized" });
    }
  
    // If header exists, allow request 
    next();
  };
  