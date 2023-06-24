package com.nevil.Nevil.clothes;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/clothes")
public class ClothesController {
    @Autowired
    private ClothesService clothesService;

    @GetMapping
    public ResponseEntity<List<Clothes>> getAllClothes(){
        return new ResponseEntity<>(clothesService.allClothes(), HttpStatus.OK);
    }

    @GetMapping("/bottoms")
    public ResponseEntity<List<Clothes>> getBottoms() {return new ResponseEntity<>(clothesService.clothesByCategory("bottom"),HttpStatus.OK);}

    @GetMapping("/tops")
    public ResponseEntity<List<Clothes>> getTops() {return new ResponseEntity<>(clothesService.clothesByCategory("top"),HttpStatus.OK);}

    @GetMapping("/otters")
    public ResponseEntity<List<Clothes>> getOtters() {return new ResponseEntity<>(clothesService.clothesByCategory("otter"),HttpStatus.OK);}

    @GetMapping("/footwears")
    public ResponseEntity<List<Clothes>> getFootwears() {return new ResponseEntity<>(clothesService.clothesByCategory("footwear"),HttpStatus.OK);}

    @GetMapping("/category/{type}")
    public ResponseEntity<List<Clothes>> getByType(@PathVariable String type) {return new ResponseEntity<>(clothesService.clothesByType(type ), HttpStatus.OK);}


}
