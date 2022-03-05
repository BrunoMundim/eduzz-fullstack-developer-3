class CustomError extends Error {
    constructor({ message, data }) {
      super(message);
      this.data = data;
    }
  }
  
  try{
    const NAME = 'Bruno Mundim';
  
    const myError = new CustomError({
      message: 'Custom message',
      data: {
        type: 'Server error'
      }
    });
  
    throw myError; // Somente o primeiro erro aparece no try/catch
  
  } catch(err){
    console.log('Erro:', err)
    console.log(err.data);
  }
  
  console.log('Erro tratado corretamente!')