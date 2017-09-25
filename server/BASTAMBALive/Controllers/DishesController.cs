using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BASTAMBALive.Controllers
{
    [Route("api/[controller]")]
    public class DishesController : Controller
    {
        private static ConcurrentDictionary<Guid, Dish> _database;

        static DishesController()
        {
            _database = new ConcurrentDictionary<Guid, Dish>();
            var guid = Guid.NewGuid();

            _database.TryAdd(guid, new Dish
            {
                Id = guid,
                Name = "Spaghetti Bolognese",
                Description = " El classico!"
            });
        }

        [HttpGet]
        [Route("")]
        public List<Dish> GetDishes()
        {
            return _database.Values.ToList();
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetDish(Guid id)
        {
            Dish returnValue;

            if(_database.TryGetValue(id, out returnValue))
            {
                return Ok(returnValue);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        [Route("")]
        public Dish AddNewDish([FromBody]Dish dish)
        {
            var guid = Guid.NewGuid();

            dish.Id = guid;

            _database.TryAdd(guid, dish);

            return dish;
        }
     }
}
