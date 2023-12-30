export interface Book 
{
  id : string,
  title : string,
  description : string,
  author : string,
  rate? :number,
  dateStarted?  :Date,
  dateRead? : Date,
  user: string
}

