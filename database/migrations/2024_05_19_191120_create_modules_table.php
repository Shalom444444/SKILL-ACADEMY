<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up():void
    {
        Schema::create('modules', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('training_id');
            $table->string('title');
            $table->string('type'); // Type de module (ex. vidéo, PDF)
            $table->string('resource_url'); // URL de la ressource associée au module
            $table->timestamps();
    
            $table->foreign('training_id')->references('id')->on('trainings')->onDelete('cascade');
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('modules');
    }
};
