const normalizeDocs = (docs) => {
  const list = {};
  const ids = [];

  for (let i = 0; i < docs.length; i += 1) {
    const id = docs[i]._id;
    list[id] = docs[i];
    ids.push(id);
  }

  return { ids, list };
};

export default normalizeDocs;
