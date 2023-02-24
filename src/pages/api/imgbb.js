import axios from "axios";

const remoteImageUploadApi = async (body) => {
  const {
    data: {
      data: { url },
    },
  } = await axios({
    method: "post",
    url: "https://api.imgbb.com/1/upload",
    data: body,
  });

  return url;
};

export { remoteImageUploadApi };
