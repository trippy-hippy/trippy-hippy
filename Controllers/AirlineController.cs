using HippyTrippy.Models;
using HippyTrippy.Services;
using Microsoft.AspNetCore.Mvc;

namespace HippyTrippy.Controllers;

[ApiController]
[Route("[controller]")]
public class AirlineController : ControllerBase
{
    public AirlineController()
    {
    }

    // GET all action
    [HttpGet]
public ActionResult<List<Airline>> GetAll() =>
    AirlineService.GetAll();

    // GET by Id action
    [HttpGet("{id}")]
public ActionResult<Airline> Get(int id)
{
    var airline = AirlineService.Get(id);

    if(airline == null)
        return NotFound();

    return airline;
}

    // POST action

    // PUT action

    // DELETE action
}