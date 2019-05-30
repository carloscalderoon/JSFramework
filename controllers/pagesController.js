exports.show = (req, res) => {
    // Check if the path is root or a page
    const path = (req.path === '/') ? `/home` : req.path;

    // Render the Path
    res.render(`pages${path}`); // views/pages/about
};