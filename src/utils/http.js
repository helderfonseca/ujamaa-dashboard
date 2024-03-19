export async function fetchCategoriesNCandidatesFase2() {

    const response = await fetch("https://api.ujamaa.com/v1/categoriesNcandidatesFase2");
    
    if(!response.ok) {
      const error = new Error('An error occurred while fetching the results!')
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }

    const data  = await response.json();
    return data;
}