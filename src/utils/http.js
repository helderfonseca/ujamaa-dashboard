export async function fetchCategoriesNCandidates() {

    const response = await fetch("https://api.ujamaacv.com/v1/categoriesNcandidates");
    
    if(!response.ok) {
      const error = new Error('An error occurred while fetching the results!')
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }

    const data  = await response.json();
    return data;
}