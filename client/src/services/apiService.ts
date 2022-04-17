import http from "./httpService";

class ApiService {
  private apiURL = process.env.REACT_APP_BACKEND_URL;

  public uploadImage(data: FormData) {
    return http.post(this.apiURL + "/upload", data);
  }

  public createData(file: File) {
    let formData = new FormData();
    formData.append("file", file);

    return formData;
  }

  public get API_URL() {
    return this.apiURL;
  }
}

export default new ApiService();
