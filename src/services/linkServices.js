const LinkService = {};

LinkService.load = () => {
  try {
    return JSON.parse(localStorage.getItem("linkArray"));
  } catch (error) {
    console.log("error", error);
    return false;
  }
};

LinkService.save = (linkArray) => {
  try {
    localStorage.setItem("linkArray", JSON.stringify(linkArray));
    return true;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};

export default LinkService;
