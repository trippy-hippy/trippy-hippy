using HippyTrippy.Models;

namespace HippyTrippy.Services;

public static class AirlineService
{
    static List<Airline> Airlines { get; }
    static int nextId = 3;
    static AirlineService()
    {
        Airlines = new List<Airline>
        {
            new Airline { Id = 1, Name = "Delta", Cost = 1000 },
            new Airline { Id = 2, Name = "Sun Country", Cost = 500 }
        };
    }

    public static List<Airline> GetAll() => Airlines;

    public static Airline? Get(int id) => Airlines.FirstOrDefault(p => p.Id == id);

    public static void Add(Airline airline)
    {
        airline.Id = nextId++;
        Airlines.Add(airline);
    }

    public static void Delete(int id)
    {
        var airline = Get(id);
        if(airline is null)
            return;

        Airlines.Remove(airline);
    }

    public static void Update(Airline airline)
    {
        var index = Airlines.FindIndex(p => p.Id == airline.Id);
        if(index == -1)
            return;

        Airlines[index] = airline;
    }
}