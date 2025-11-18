using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MongoSki.Models;
using MongoSki.Services;

namespace MongoSki.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ResortController : ControllerBase
{
    private readonly MongoDBServices _mongoDBService;

    public ResortController(MongoDBServices mongoDBService)
    {
        _mongoDBService = mongoDBService;
    }

    [HttpGet]
    public async Task<List<Resort>> Get()
    {
        return await _mongoDBService.GetAsync();
    }

    [HttpGet("{slug}")]
    public async Task<IActionResult> GetBySlug(string slug)
    {
        var resort = await _mongoDBService.GetBySlugAsync(slug);
        if (resort == null)
        {
            return NotFound(new { message = $"Resort with slug '{slug}' not found" });
        }
        return Ok(resort);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Resort newResort)
    {
        await _mongoDBService.CreateAsync(newResort);
        return CreatedAtAction(nameof(GetBySlug), new { slug = newResort.Slug }, newResort);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> AddToResort(string id, [FromBody] string resortId)
    {
        await _mongoDBService.AddToResort(id, resortId);
        return NoContent();
    }
}