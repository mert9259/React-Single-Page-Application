const LinkService = {};

LinkService.load = () => {
  try {
    return JSON.parse(localStorage.getItem("linkArray")).sort((a,b) => b.id - a.id);
  } catch (error) {
    console.log("error", error);
    return false;
  }
};

LinkService.save = (linkArray) => {
  try {
    localStorage.setItem("linkArray", JSON.stringify(linkArray.sort((a,b) => b.id - a.id)));
    return true;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};

LinkService.getLastId = () => {
  try {
    const lastId = parseInt(localStorage.getItem("lastId"));
    if (!lastId) return 0;

    return lastId;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};

LinkService.saveLastId = (lastId) => {
  try {
    localStorage.setItem("lastId", lastId);
    return true;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};

export default LinkService;
