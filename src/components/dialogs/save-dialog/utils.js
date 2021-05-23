export const handleLocalSaveClick = (saveName = "", dataToSave = {}) => {
  let saves = JSON.parse(localStorage.getItem("beside_yourself_saves")) || [];
  const saveObject = { saveName, saveData: dataToSave };
  const currentSaveIndex = saves.findIndex(
    (save) => save.saveName === saveName
  );
  if (currentSaveIndex !== -1) saves[currentSaveIndex] = saveObject;
  else saves = [...saves, saveObject];
  localStorage.setItem("beside_yourself_saves", JSON.stringify(saves));
};
