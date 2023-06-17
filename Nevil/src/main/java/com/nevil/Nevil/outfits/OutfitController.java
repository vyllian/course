package com.nevil.Nevil.outfits;


import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/outfits")
public class OutfitController {
    @Autowired
    private OutfitService outfitService;

    @GetMapping
    public ResponseEntity<List<Outfit>> getAllOutfits(){
        return new ResponseEntity<>(outfitService.allOutfit(), HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<?> addOutfit(@RequestBody Outfit outfit){
        return ResponseEntity.ok(outfitService.save(outfit));
    }
   @GetMapping("/findBy/{id}")
    public ResponseEntity<Optional<Outfit>> getSingleOutfit(@PathVariable ObjectId id) {
        return new ResponseEntity<>(outfitService.singleOutfit(id), HttpStatus.OK);
    }

    @PutMapping("/update/like/{id}")
    public ResponseEntity<?> updateOutfitLike(@PathVariable ObjectId id) {
        return  ResponseEntity.ok(outfitService.updateLike(id));
    }


}
