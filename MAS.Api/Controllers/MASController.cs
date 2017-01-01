using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MAS.Api.Models;
using System.Text;

namespace MAS.Api.Controllers
{
    public class MASController : ApiController
    {
       #region Variables
        Enquiry objEnquiry;
        #endregion
        
        public MASController()
        {
            objEnquiry = new Enquiry();
        }

        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        public string Contact(string name, string mobile, string company, string message, string email)
        {
            objEnquiry.Name = name.Trim().ToString();
            objEnquiry.Mobile = mobile.Trim().ToString();
            objEnquiry.Company = company.Trim().ToString();
            objEnquiry.Message = message.Trim().ToString();
            objEnquiry.Email = email.Trim().ToString();
            return objEnquiry.ContactEmail().ToString();
        }
    }
}
